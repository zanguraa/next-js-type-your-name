import React from "react";
import { Link } from "next/link";
const getPreddictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);

  return res.json();
};

const getPreddictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);

  return res.json();
};

const getPreddictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);

  return res.json();
};
interface PageProps {
  params: {
    name: string;
  };
}
export default async function Page({ params }: PageProps) {
  const ageData = await getPreddictedAge(params.name);
  const genderData = await getPreddictedGender(params.name);
  const countryData = await getPreddictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="w-full py-40 flex-col min-h-screen	flex justify-center items-center bg-inherit">
      <div>Personal Info</div>
      <div>Age: {age?.age}</div>
      <div>Gender: {gender?.gender}</div>
      <div>Country: {country?.country[0]?.country_id}</div>
    </div>
  );
}
