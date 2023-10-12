interface Props {
  color: string;
}
export default function BlockColor({ color }: Props) {
  return <div style={{background: color}} className={`w-8 h-8`}></div>;
}
