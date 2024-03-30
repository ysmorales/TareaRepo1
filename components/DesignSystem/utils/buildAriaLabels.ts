export default function buildAriaLabels( props: any, options: any) {
  const result: string[] = [];

  Object.entries( options).forEach(([key, value]: any[]) => {
    if (props[key]) {
      result.push( value);
    }
  });

  //debugger;

  return result.join( ' ');
}
