import todoist from "../../todoist.app.mjs";

export default {
  key: "todoist-get-label",
  name: "Get Label",
  description: "Returns info about a label. [See the docs here](https://developer.todoist.com/rest/v2/#get-a-personal-label)",
  version: "0.0.2",
  type: "action",
  props: {
    todoist,
    label: {
      propDefinition: [
        todoist,
        "label",
      ],
    },
  },
  async run ({ $ }) {
    const resp = (await this.todoist.getLabels({
      $,
      id: this.label,
    }));
    $.export("$summary", "Successfully retrieved label");
    return resp;
  },
};
