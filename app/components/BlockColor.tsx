interface Props {
  color: string;
}
export default function BlockColor({ color }: Props) {
  return <div style={{background: color}} className={`w-12 h-12`}></div>;
}
