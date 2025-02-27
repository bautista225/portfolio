import HtmlIcon from "../icons/Html.astro";
import BootstrapIcon from "../icons/Bootstrap.astro";
import JavaScriptIcon from "../icons/JavaScript.astro";
import CSharpIcon from "../icons/CSharp.astro";
import ReactIcon from "../icons/React.astro";
import ReduxIcon from "../icons/Redux.astro";
import ReactRouterIcon from "../icons/ReactRouter.astro";
import TypeScriptIcon from "../icons/TypeScript.astro";
import CohereIcon from "../icons/Cohere.astro";
import CSSIcon from "../icons/CSS.astro";
import ViteIcon from "../icons/Vite.astro";
import DotNetIcon from "../icons/DotNet.astro";
import BashIcon from "../icons/Bash.astro";
import SqlIcon from "../icons/Sql.astro";
import NoSQLIcon from "../icons/NoSQL.astro";
import GitIcon from "../icons/Git.astro";
import PythonIcon from "../icons/Python.astro";
import PytorchIcon from "../icons/Pytorch.astro";
import TensorFlowIcon from "../icons/TensorFlow.astro";
import ScikitLearnIcon from "../icons/Scikit-learn.astro";
import OpenCVIcon from "../icons/OpenCV.astro";
import DockerIcon from "../icons/Docker.astro";
import JiraIcon from "../icons/Jira.astro";

export type Technology = {
  name: string;
  class: string;
  icon: (_props: Record<string, any>) => any;
};

export const TECHNOLOGIES = {
  HTML: {
    name: "HTML",
    class: "bg-[#20232A] text-white",
    icon: HtmlIcon,
  },
  Bootstrap: {
    name: "Bootstrap",
    class: "bg-[#20232A] text-white",
    icon: BootstrapIcon,
  },
  JavaScript: {
    name: "JavaScript",
    class: "bg-[#20232A] text-white",
    icon: JavaScriptIcon,
  },
  CSharp: {
    name: "C#",
    class: "bg-[#20232A] text-white",
    icon: CSharpIcon,
  },
  React: {
    name: "React",
    class: "bg-[#20232A] text-white",
    icon: ReactIcon,
  },
  Redux: {
    name: "Redux",
    class: "bg-[#20232A] text-white",
    icon: ReduxIcon,
  },
  ReactRouter: {
    name: "React Router",
    class: "bg-[#20232A] text-white",
    icon: ReactRouterIcon,
  },
  TypeScript: {
    name: "TypeScript",
    class: "bg-[#20232A] text-white",
    icon: TypeScriptIcon,
  },
  Cohere: {
    name: "Cohere AI",
    class: "bg-[#20232A] text-white",
    icon: CohereIcon,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#20232A] text-white",
    icon: CSSIcon,
  },
  Vite: {
    name: "Vite",
    class: "bg-[#20232A] text-white",
    icon: ViteIcon,
  },
  DotNet: {
    name: ".Net",
    class: "bg-[#20232A] text-white",
    icon: DotNetIcon,
  },
  Bash: {
    name: "Bash",
    class: "bg-[#20232A] text-white",
    icon: BashIcon,
  },
  SQL: {
    name: "SQL",
    class: "bg-[#20232A] text-white",
    icon: SqlIcon,
  },
  NoSQL: {
    name: "NoSQL",
    class: "bg-[#20232A] text-white",
    icon: NoSQLIcon,
  },
  git: {
    name: "git",
    class: "bg-[#20232A] text-white",
    icon: GitIcon,
  },
  Python: {
    name: "Python",
    class: "bg-[#20232A] text-white",
    icon: PythonIcon,
  },
  Pytorch: {
    name: "Pytorch",
    class: "bg-[#20232A] text-white",
    icon: PytorchIcon,
  },
  TensorFlow: {
    name: "TensorFlow",
    class: "bg-[#20232A] text-white",
    icon: TensorFlowIcon,
  },
  ScikitLearn: {
    name: "Scikit-learn",
    class: "bg-[#20232A] text-white",
    icon: ScikitLearnIcon,
  },
  OpenCV: {
    name: "OpenCV",
    class: "bg-[#20232A] text-white",
    icon: OpenCVIcon,
  },
  Docker: {
    name: "Docker",
    class: "bg-[#20232A] text-white",
    icon: DockerIcon,
  },
  Jira: {
    name: "Jira",
    class: "bg-[#20232A] text-white",
    icon: JiraIcon,
  },
};
