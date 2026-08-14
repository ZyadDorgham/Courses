import { useEffect } from "react";

export default function CatGetData({ setdata, setloading, seterr }) {
  useEffect(() => {
    async function Get() {
      try {
        const response = await fetch(
          "https://www.uofcourse.com/api/courses"
        );

        if (!response.ok) {
          throw new Error("Failed request");
        }

        const json = await response.json();

        setdata(json.results);
      } catch (err) {
        seterr(err.message);
      } finally {
        setloading(false);
      }
    }

    Get();
  }, [setdata, setloading, seterr]);

  return null;
}