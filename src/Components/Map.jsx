export default function Map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1fhoFFVdY5piZ7qeSeG9ujpyAjWz4plA&ehbc=2E312F"
        width="640"
        height="640"
      ></iframe>
      <p>
        Map data provided by{" "}
        <a className="underline" href="https://opendata.cityofnewyork.us/data/">
          Open Data NYC
        </a>
      </p>
    </>
  );
}
