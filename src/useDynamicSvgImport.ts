import React, { useEffect, useRef, useState } from "react";

export function useDynamicSvgImport(iconPath: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`http://localhost:5173/src/assets/${iconPath}.svg`)
        ).ReactComponent; // svgr provides ReactComponent for given svg path
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconPath]);

  return { error, loading, SvgIcon: importedIconRef.current };
}