import { FC } from "react";
import { Body, H1 } from "@rikstv/shared-components/src/components";

export const NotFound: FC = () => (
  <div className="portal-max-width">
    <H1>Nei, har du sett!</H1>
    <Body lookLike="title-3">
      Enten så vet du noe vi ikke vet eller så har vi gjort noe rart, for denne siden klarte vi ikke finne.
    </Body>
  </div>
);
