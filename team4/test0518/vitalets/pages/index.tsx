// export default function Translate() {
//   const translate = require("@vitalets/google-translate-api");

//   return async () => {
//     try {
//       const res = await translate("I speak Korean", { from: "en", to: "ko" });
//       res.text;
//       console.log(res.from.language.iso);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

export default function Translate() {
  const translate = require("@vitalets/google-translate-api");
  const res = translate("Ik spreek Engels", { to: "en" });

  return res.text;
}
