import { useState } from "react";
import { useForm } from "react-hook-form";
import data from "../data/FormQuestions.json";
import scoreCard from "../data/FormScores.json";
import { useLocation } from "react-router-dom";
import { FaPerson, FaPersonWalking, FaPersonRunning } from "react-icons/fa6";
import Map from "./Map";
import LinkToPDFButton from "./LinkToPDFButton";
import { Link } from "react-router-dom";

export default function Form() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({});
  const [scores, setScores] = useState();
  const { search } = useLocation();

  let section = search.slice(-2);

  return (
    <>
      {data[section].map((section, i) => {
        if (section.title !== "Overall") {
          return (
            <>
              {currentSection === i + 1 && (
                <SectionTemp
                  key={(i + 1) * 5}
                  setCurrentSection={setCurrentSection}
                  section={section}
                  setFormData={setFormData}
                  setScores={setScores}
                />
              )}
            </>
          );
        } else {
          return (
            <>
              {currentSection === i + 1 && (
                <OverallSectionTemp
                  key={(i + 1) * 5}
                  setCurrentSection={setCurrentSection}
                  section={section}
                  setFormData={setFormData}
                  setScores={setScores}
                />
              )}
            </>
          );
        }
      })}
      {currentSection === 7 && (
        <Result
          key={350}
          scores={scores}
          formData={formData}
          scoreCard={scoreCard}
        />
      )}
    </>
  );
}

const SectionTemp = ({
  setCurrentSection,
  section,
  setFormData,
  setScores,
}) => {
  const { register, handleSubmit } = useForm({
    reValidateMode: "onBlur",
  });

  return (
    <>
      <h1 className="text-3xl mt-10 text-center mb-5 ">{section.title}</h1>
      <form
        className="grid grid-cols-3 gap-4 mx-auto ml-24"
        onSubmit={handleSubmit((data) => {
          const dataSection = data[section.title];

          let total = 0;
          for (let key in dataSection) {
            if (typeof dataSection[key] === "string") {
              total += Number(dataSection[key]);
            }
          }
          setCurrentSection((num) => num + 1);
          setFormData((obj) => ({
            ...obj,
            ...data,
          }));
          setScores((scores) => ({ ...scores, [section.title]: total }));
        })}
      >
        {section.questions.map((question, i) => {
          let id = `Q${i + 1}`;
          let questionId = `${section.title}.${id}`;
          let exampleId = `${section.title}.example.${id}`;
          return (
            <>
              <section
                key={id}
                id={id}
                className=" bg-white border rounded-md w-60 space-x-2 p-10 min-w-[20rem]"
              >
                <h2 className="mb-5">
                  {i + 1}. {question.question}
                </h2>

                <input
                  type="radio"
                  {...register(questionId, { required: true })}
                  value="10"
                  id="yes"
                />
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  {...register(questionId)}
                  value="5"
                  id="Sometimes"
                />
                <label htmlFor="Sometimes"> Sometimes</label>
                <input
                  type="radio"
                  {...register(questionId)}
                  value="0"
                  id="no"
                />
                <label htmlFor="no"> No</label>
                {question.options &&
                  question.options.map((opt, index) => (
                    <>
                      <input
                        key={index}
                        id={`${exampleId}.${index + 1}`}
                        type="checkbox"
                        {...register(`${exampleId}.${index + 1}`)}
                        value={opt}
                      />
                      <label htmlFor={`${exampleId}.${index + 1}`}>{opt}</label>
                    </>
                  ))}
                {question.textboxExample && (
                  <>
                    <label className="block">{question.textboxExample}</label>
                    <textarea
                      className="border rounded-md"
                      {...register(exampleId)}
                    />
                  </>
                )}
              </section>
            </>
          );
        })}
        <div></div>

        <input
          type="submit"
          className="-ml-24 hover:cursor-pointer w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto"
        />
      </form>
    </>
  );
};

const OverallSectionTemp = ({
  setCurrentSection,
  section,
  setFormData,
  setScores,
}) => {
  const { register, handleSubmit, watch } = useForm({
    reValidateMode: "onBlur",
  });

  return (
    <>
      <h1 className="text-3xl text-cente mb-5 ">{section.title}</h1>
      <form
        onSubmit={handleSubmit((data) => {
          setCurrentSection((num) => num + 1);
          setFormData((obj) => ({ ...obj, ...data }));
        })}
        className="grid grid-cols-5 gap-4 mx-auto ml-7"
      >
        {section.questions.map((question, i) => {
          let id = `Q${i + 1}`;
          let questionId = `${section.title}.${id}`;
          let explainId = `${section.title}.explain.${id}`;
          let isYesOrNo = i + 1 < 6 ? "no" : "yes";
          return (
            <>
              <section
                key={id}
                id={id}
                className="border bg-white p-4 rounded-md w-60 space-x-2"
              >
                <h2 className="mb-5">
                  {i + 1}. {question.question}
                </h2>

                <input
                  type="radio"
                  {...register(questionId, { required: true })}
                  value="yes"
                  id="yes"
                />
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  {...register(questionId)}
                  value="no"
                  id="no"
                />
                <label htmlFor="no"> No</label>
                {watch(questionId) === isYesOrNo && (
                  <>
                    <label className="block">Explain:</label>
                    <textarea
                      className="border rounded-md"
                      {...register(explainId, { required: true })}
                    />
                  </>
                )}
              </section>
            </>
          );
        })}
        <div></div>
        <div></div>
        <input
          type="submit"
          className="rounded-md bg-blue-500 -ml-7 p-3 border text-white hover:cursor-pointer"
        />
      </form>
    </>
  );
};

const Result = ({ scores, formData, scoreCard }) => {
  const { search } = useLocation();
  const result = [];
  let section = search.slice(-2);

  for (let key in scores) {
    let icon,
      development,
      cutoff = "";

    if (scores[key] > scoreCard[section][key] + 10) {
      cutoff = `You're child scored above the cut-off score of ${scoreCard[section][key]}.`;
      development = `You're child's development appears to be on schedule`;
      icon = <FaPersonRunning className="inline w-7 h-7" />;
    } else if (scores[key] > scoreCard[section][key]) {
      cutoff = `The cut-off for recommending further assessment in this category is ${scoreCard[section][key]}. You're child's score is above but close to the cut-off. Provide learning activities (see learning activities below) and monitor`;
      development = "Provide learning activities and monitor";
      icon = <FaPersonWalking className="inline w-7 h-7" />;
    } else {
      cutoff = `You're child scored below the cut-off score of ${scoreCard[section][key]}. A medical office or Pre-K will be able to offer further professional assessment. See map of Pre-K Providers below`;
      development = "Further assessment with a profession may be needed";
      icon = <FaPerson className="inline w-7 h-7" />;
    }

    console.log(cutoff);
    result.push(
      <div className="w-80 h-fit border rounded-md p-5 bg-white">
        <h1 className="block text-2xl">{key}:</h1>
        <h1 className="block text-2xl">{scores[key]} / 60</h1>
        <div className="mt-10">
          <>{icon}</>
          <p className="text-l mb-5 pt-2 inline">{development}</p>
        </div>
        <p className="pt-6">{cutoff}</p>
      </div>,
    );
  }

  // console.log(scores, scoreCard[section], formData);

  return (
    <>
      <main className=" w-full min-h-screen">
        <h1 className=" my-[5%] text-center text-4xl font-extrabold tracking-tight text-[#0065ff]">
          Results
        </h1>

        <div className="flex space-x-10 mx-10">{result}</div>
        <div className="w-fit block mt-40 my-10 ml-40 rounded-md">
          <h2 className="text-xl mb-2"> NYC Pre-K Providers </h2>
          <Map />
        </div>
      </main>
    </>
  );
};
