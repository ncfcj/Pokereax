interface IProps {
  iconPath: string;
  wrapperStyle?: React.CSSProperties;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

export const SvgIcon = (props: IProps) => {
  const { iconPath, wrapperStyle } = props;

  return (
    <>
      <img src={iconPath} style={wrapperStyle}></img>
    </>
  );
}