import { DiAws, DiDocker } from "react-icons/di";
import {
  SiReact,
  SiFirebase,
  SiGit,
  SiTypescript,
  SiDotNet,
  SiAngular,
  SiNodeDotJs,
  SiGo,
  SiMicrosoftsqlserver,
  SiMongodb,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "Typescript",
    Component: SiTypescript,
    title: "Typescript",
    Description: () => (
      <>I developed many application Front End And Backend using Typescript.</>
    ),
  },

  {
    slug: "angular",
    Component: SiAngular,
    title: "Angular",
    Description: () => (
      <>
        I developed many application Front End With Angular ecosystem using
        Angular Material, Ant Design, NRWL NX, Ngrx, RxJs etc... .
      </>
    ),
  },
  {
    slug: "react",
    Component: SiReact,
    title: "React",
    Description: () => (
      <>
        I developed many application Front End With React using Material UI,
        React From, React Query, React Table, Redux, Redux Toolkit etc... .
      </>
    ),
  },
  {
    slug: "nodejs",
    Component: SiNodeDotJs,
    title: "NodeJs",
    Description: () => (
      <>
        I developed many application Back End With Nodejs using ExpressJs,
        NestJs, TypeORM, PassportJs,Sequelize, Mongoose ,GraphQl ,Swagger etc...
        .
      </>
    ),
  },
  {
    slug: "golang",
    Component: SiGo,
    title: "Go",
    Description: () => (
      <>
        I developed many application Back End With Go using Gorilla, Fiber,
        GORM, SQLC , GRPC ,Swaggo etc... .
      </>
    ),
  },
  {
    slug: ".Net Core",
    Component: SiDotNet,
    title: ".Net Core",
    Description: () => (
      <>Currently working with Asp.Net , Entity Framework And Blazor. </>
    ),
  },

  {
    slug: "sql",
    Component: SiMicrosoftsqlserver,
    title: "SQL",
    Description: () => (
      <>I'm using Many SQL databases Like SQl Server, MySQL,PostgreSQL</>
    ),
  },
  {
    slug: "nosql",
    Component: SiMongodb,
    title: "NoSQL",
    Description: () => <>I'm using Many NoSQL databases Like MongoDB,Redis</>,
  },

  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>I have used Firebase for auth, database & analytics in my apps.</>
    ),
  },
  {
    slug: "aws",
    Component: DiAws,
    title: "Amazon Web Services",
    Description: () => (
      <>
        I'm using also Cloud Providers Like aws , Lambda, S3, EC2,EMR Etc... .{" "}
      </>
    ),
  },
  {
    slug: "docker",
    Component: DiDocker,
    title: "Docker",
    Description: () => (
      <>
        I'm using To ship my applications using The Docker Containers. Docker
        Swarm Or kubernetes
      </>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
