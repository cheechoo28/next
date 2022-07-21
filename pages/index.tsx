import {Button, Htag, Ptag, Tag} from "../components";


export default function Home(): JSX.Element {
  return (
    <>
        <Htag tag='h1'>
            Текст
        </Htag>
        <Button appearance="primary" arrow="down">PUT</Button>
        <Button appearance="ghost">PUT</Button>
        <Ptag size="s">
            small
        </Ptag>
        <Ptag size="l">
            large
        </Ptag>
        <Ptag>
            middle
        </Ptag>
        <Tag size="s">Ghost</Tag>
        <Tag size="m" color="red">Red</Tag>
        <Tag size="s" color="green">Green</Tag>
        <Tag color="primary">Primary</Tag>
    </>
  );
}
