export type FilterType = {
  name: string;
  description: string;
  value: string;
};

export const specialties: FilterType[] = [
  {
    name: "All",
    description: "All specialties",
    value: "all",
  },

  {
    name: "Dermatology",
    description:
      "Specializes in the diagnosis and treatment of skin conditions.",
    value: "der",
  },

  {
    name: "Cardiology",
    description:
      "Specializes in the diagnosis and treatment of heart diseases.",
    value: "car",
  },

  {
    name: "Orthopedics",
    description:
      "Specializes in the diagnosis and treatment of musculoskeletal disorders.",
    value: "ort",
  },

  {
    name: "Neurology",
    description:
      "Specializes in the diagnosis and treatment of disorders of the nervous system.",
    value: "neu",
  },

  {
    name: "Gastroenterology",
    description:
      "Specializes in the diagnosis and treatment of digestive system disorders.",
    value: "gas",
  },

  {
    name: "Ophthalmology",
    description: "Specializes in the diagnosis and treatment of eye disorders.",
    value: "oph",
  },

  {
    name: "Pediatrics",
    description:
      "Specializes in the medical care of infants, children, and adolescents.",
    value: "ped",
  },

  {
    name: "Oncology",
    description: "Specializes in the diagnosis and treatment of cancer.",
    value: "onc",
  },

  {
    name: "Psychiatry",
    description:
      "Specializes in the diagnosis and treatment of mental disorders.",
    value: "psy",
  },

  {
    name: "Urology",
    description:
      "Specializes in the diagnosis and treatment of urinary system disorders.",
    value: "uro",
  },
  
];

export const AppointmentType: FilterType[] = [
  {
    name: "All",
    description: "All specialties",
    value: "all",
  },

  {
    name: "Video Consultation",
    description: "Consultation through video call.",
    value: "video",
  },

  {
    name: "In Person",
    description: "Consultation through physical visit.",
    value: "physical",
  },
];

export const Gender: FilterType[] = [
    {
        name: "All",
        description: "All Gender",
        value: "all",
      },
      {
        name: "Male",
        description: "Male Doctors",
        value: "male",
      },
      {
        name: "Female",
        description: "Female Doctors",
        value: "female",
      },
      {
        name: "Other",
        description: "Other",
        value: "oth",
      },    
]


export const Language: FilterType[] = [
    {
        name: "All",
        description: "All Languages",
        value: "all",
    },
    {
        name: "English",
        description: "English",
        value: "en",
    },
    {
        name: "Spanish",
        description: "Spanish",
        value: "es",
    },
    {
        name: "French",
        description: "French",
        value: "fr",
    },
    {
        name: "German",
        description: "German",
        value: "de",
    },
    {
        name: "Italian",
        description: "Italian",
        value: "it",
    },
    {
        name: "Chinese",
        description: "Chinese",
        value: "zh",
    },
    {
        name: "Japanese",
        description: "Japanese",
        value: "ja",
    },
    {
        name: "Korean",
        description: "Korean",
        value: "ko",
    },
    {
        name: "Russian",
        description: "Russian",
        value: "ru",
    },
    {
        name: "Hindi",
        description: "Hindi",
        value: "hi",
    },
];

export type DoctorType = {
  id: number;
  name: string;
  speciality: string;
  image: string;
  location: string;
  experience: number;
  verified: boolean;
  languages: string[];
  rating: number;
  reviews: number;
  endorsements: number;
}

export const doctors: DoctorType[] = [
  {
    id: 1,
    name: "Dr. Smith",
    speciality: "Cardiologist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "New York",
    experience: 15,
    verified: true,
    languages: ["English", "Spanish"],
    rating: 4.8,
    reviews: 120,
    endorsements: 35,
  },
  {
    id: 2,
    name: "Dr. Johnson",
    speciality: "Dermatologist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/mr-christian-brown/mr-christian-brown.webp",
    location: "Los Angeles",
    experience: 12,
    verified: true,
    languages: ["English", "French"],
    rating: 4.5,
    reviews: 90,
    endorsements: 28,
  },
  {
    id: 3,
    name: "Dr. Garcia",
    speciality: "Orthopedic Surgeon",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/mr-dimitri-yanni/mr-dimitri-yanni.webp",
    location: "Chicago",
    experience: 18,
    verified: true,
    languages: ["English", "Spanish"],
    rating: 4.9,
    reviews: 150,
    endorsements: 42,
  },
  {
    id: 4,
    name: "Dr. Wang",
    speciality: "Pediatrician",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/mr-declan-cahill/mr-declan-cahill.webp",
    location: "Houston",
    experience: 10,
    verified: true,
    languages: ["English", "Mandarin"],
    rating: 4.7,
    reviews: 80,
    endorsements: 25,
  },
  {
    id: 5,
    name: "Dr. Patel",
    speciality: "Ophthalmologist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "San Francisco",
    experience: 14,
    verified: true,
    languages: ["English", "Hindi"],
    rating: 4.6,
    reviews: 100,
    endorsements: 30,
  },
  {
    id:6,
    name: "Dr. Kim",
    speciality: "Gynecologist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "Miami",
    experience: 16,
    verified: true,
    languages: ["English", "Korean"],
    rating: 4.8,
    reviews: 110,
    endorsements: 38,
  },
  {
    id: 7,
    name: "Dr. Davis",
    speciality: "Neurologist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "Seattle",
    experience: 20,
    verified: true,
    languages: ["English", "French"],
    rating: 4.9,
    reviews: 130,
    endorsements: 40,
  },
  {
    id: 8,
    name: "Dr. Hernandez",
    speciality: "Rheumatologist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "Dallas",
    experience: 13,
    verified: true,
    languages: ["English", "Spanish"],
    rating: 4.7,
    reviews: 95,
    endorsements: 32,
  },
  {
    id: 9,
    name: "Dr. Nguyen",
    speciality: "ENT Specialist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "Atlanta",
    experience: 11,
    verified: true,
    languages: ["English", "Vietnamese"],
    rating: 4.5,
    reviews: 85,
    endorsements: 26,
  },
  {
    id: 10,
    name: "Dr. Taylor",
    speciality: "Psychiatrist",
    image: "https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp",
    location: "Denver",
    experience: 17,
    verified: true,
    languages: ["English"],
    rating: 4.8,
    reviews: 125,
    endorsements: 36,
  },
];