/* eslint-disable camelcase */
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
  notification_email?: string;
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
  available_hours?: {
    day_of_week: string;
    start_time: string;
    end_time: string;
  }[];
  review?: {
    patient_name: string;
    star_count: number;
    comment: string;
  }[];
};

export default atom<DoctorProfile | null>({
  key: "doctorProfile",
  default: null,
});
