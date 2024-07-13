// // import "./PersonGeneral.css";

// // interface PersonData {
// //   name: string;
// //   gender: string;
// //   birth_year: string;
// // }

// // interface PersonProps {
// //   person: PersonData;
// //   handleShowDetails: (name: string) => void;
// // }

// // const PersonGeneral: React.FC<PersonProps> = ({
// //   person,
// //   handleShowDetails,
// // }) => {
// //   return (
// //     <div
// //       className="personGeneral"
// //       onClick={() => handleShowDetails(person.name)}
// //     >
// //       {person.name}
// //     </div>
// //   );
// // };

// // export default PersonGeneral;
// import "./PersonGeneral.css";

// interface PersonData {
//   name: string;
//   gender: string;
//   birth_year: string;
// }

// interface PersonProps {
//   person: PersonData;
//   handleShowDetails: (name: string) => void;
// }

// const PersonGeneral: React.FC<PersonProps> = ({
//   person,
//   handleShowDetails,
// }) => {
//   return (
//     <div
//       className="personGeneral"
//       onClick={() => handleShowDetails(person.name)}
//     >
//       {person.name}
//     </div>
//   );
// };

// export default PersonGeneral;

import "./PersonGeneral.css";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

interface PersonProps {
  person: PersonData;
  handleShowDetails: (name: string) => void;
}

const PersonGeneral: React.FC<PersonProps> = ({
  person,
  handleShowDetails,
}) => {
  return (
    <div
      className="personGeneral"
      onClick={() => handleShowDetails(person.name)}
    >
      {person.name}
    </div>
  );
};

export default PersonGeneral;
