import { atom } from "recoil";

export type DoctorProfile = {
  id: string;
  avg_rating: string;
  qualification_suffix?: string;
  username: string;
  full_name: string;
  email: string;
  is_verified: boolean;
  street: string;
  state: string;
  city?: string;
  zip_code: string;
  contact_no: string;
  profile_photo: string;
  professional_bio: string;
  country: string;
  gender: string;
  date_of_birth: string;
  education: {
    college: string;
    course: string;
    year: string;
  }[];
  experience: {
    establishment_name: string;
    job_title: string;
    job_description: string;
    start_date: string;
    end_date?: string;
  }[];
  specialty: string[];
  available_hours?: string[];
  review?: string[];
};

export default atom<DoctorProfile | null>({
  key: "doctorProfile",
  default: null,
});
