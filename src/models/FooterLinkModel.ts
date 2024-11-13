import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface FooterLinkModel {
  href: string;
  icon: IconDefinition;
  size: "1x" | "2x" | "3x" | "4x" | "5x";
  target?: React.HTMLAttributeAnchorTarget | undefined;
}
