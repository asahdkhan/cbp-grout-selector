// eslint-disable-next-line @typescript-eslint/no-unused-vars

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}