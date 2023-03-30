import "./SvgIcon.css"


interface IProps {
  iconPath: string;
  wrapperStyle?: React.CSSProperties;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

export const SvgIcon = (props: IProps) => {
  const { iconPath, wrapperStyle } = props;

  const isDEV = import.meta.env.DEV;
  const baseURL = import.meta.env.BASE_URL;

  console.log(baseURL);

  const environmentPath = () => {
    if (isDEV == false)
      return "https://pokereax.netlify.app/"
    else
      return baseURL;
  }

  return (
    <>
      <img src={environmentPath() + iconPath} style={wrapperStyle}></img>
    </>
  );
}