import { useState } from "react";
import { useForm } from "react-hook-form";
import data from "../data/FormQuestions.json";
import scoreCard from "../data/FormScores.json";
import { useLocation } from "react-router-dom";
// import { FaPerson } from "react-icons/fa";

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
        <Result key={350} scores={scores} formData={formData} />
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
      <h1 className="text-3xl text-cente mb-5 ">{section.title}</h1>
      <form
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
                className="border rounded-md w-60 space-x-2"
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

        <input
          type="submit"
          className="rounded-md bg-blue-500 p-3 border text-white hover:cursor-pointer"
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
                className="border rounded-md w-60 space-x-2"
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

        <input
          type="submit"
          className="rounded-md bg-blue-500 p-3 border text-white hover:cursor-pointer"
        />
      </form>
    </>
  );
};

const Result = ({ scores, formData }) => {
  const { search } = useLocation();
  const result = [];
  let section = search.slice(-2);

  for (let key in scores) {
    result.push(
      <h1 className="block text-xl">
        {key}: {scores[key]} / 60
      </h1>,
      <p>
        {scores[key] > scoreCard[section][key]
          ? "You're child development appears to be on schedule"
          : scores[key] > scoreCard[section][key] - 10
          ? "Provide learning activities and monitor"
          : // <FaPerson />
            "CONSULTATION"}
      </p>,
      <p className="mb-5 pt-2">
        {scores[key] > scoreCard[section][key]
          ? "You're child development appears to be on schedule"
          : scores[key] > scoreCard[section][key] - 10
          ? "Provide learning activities and monitor"
          : "Further assessment with a professions may be needed"}
      </p>,
    );
  }

  console.log(scores, scoreCard[section], formData);

  return (
    <>
      <h1 className="text-3xl text-cente my-5 ">Results</h1>
      {result}
    </>
  );
};
