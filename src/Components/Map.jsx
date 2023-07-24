export default function Map() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 gap-1">
        <div className=" ml-[10%] mt-[10%] rounded-lg shadow-md bg-white h-fit flex grid p-12 ">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0065ff] mt-3">
            Preschool centers 🛝🌳
          </h1>
          <p className="text-xl  tracking-tight text-[#053560] mt-3">
            Preschool centers offer an ideal environment for both children with
            challenging behaviors and those without to thrive.
            <br />
            <br />
            These centers provide the tools and foster growth across domains
            such as social/emotional, academic, fine and gross motor skills.
            <br />
            <br />
            Trained educators also provide support to families that may have
            further questions or are looking for a supportive community while
            they navigate their child’s evaluation process.
            <br />
            <br />
            Through diverse learning activities and peer interactions, children
            receive a solid foundation for future educational experiences.
            Below, parents can easily locate a quality childcare provider in
            their area.
          </p>
        </div>

        <div className="m-12">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1fhoFFVdY5piZ7qeSeG9ujpyAjWz4plA&ehbc=2E312F"
            width="640"
            height="640"
          ></iframe>
          <p>
            Map data provided by{" "}
            <a
              className="underline"
              href="https://opendata.cityofnewyork.us/data/"
            >
              Open Data NYC
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
