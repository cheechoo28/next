import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="down">
        PUT
      </Button>
      <Button appearance="ghost">PUT</Button>
      <Ptag size="s">small</Ptag>
      <Ptag size="l">large</Ptag>
      <Ptag>middle</Ptag>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
