import * as Typedoc from "typedoc";

const genDoc = async () => {
  const app = await Typedoc.Application.bootstrapWithPlugins({
    entryPoints: [],
  });
  const converted = (await app).convert();
  if (await converted) {
    console.log("okk");
  }
};

genDoc();
