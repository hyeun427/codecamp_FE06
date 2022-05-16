import { Translator, Translate } from "react-auto-translate";

return (
  <Translator
    cacheProvider={cacheProvider}
    from="en"
    to="es"
    googleApiKey="API_KEY"
  >
    <h1>
      <Translate>Welcome!</Translate>
    </h1>
    ...
  </Translator>
);
