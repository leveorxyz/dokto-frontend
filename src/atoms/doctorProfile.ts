import { atom } from "recoil";

type DoctorProfile = {
  id: string;
  avgRating: string;
  qualificationSuffix?: string;
  username: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  street: string;
  state: string;
  city?: string;
  zipCode: string;
  contactNo: string;
  profilePhoto: string;
  professionalBio: string;
  country: string;
  gender: string;
  dateOfBirth: string;
  education: string[];
  experience: string[];
  specialty: string[];
  availableHours?: string[];
  review?: string[];
};

export default atom<DoctorProfile | null>({
  key: "doctorProfile",
  default: null,
});
