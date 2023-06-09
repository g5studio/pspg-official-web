import { IBaseComponentProp } from "@shared/interfaces/base-component.interface";
import "./style.scss";
import { useEffect } from "react";

interface Props extends IBaseComponentProp {

}

const ContentLayout = ({ children, testId, classes }: Props) => {
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
    return <section data-testid={testId} className={`component-content-layout ${classes ?? ''}`}>
        {children}
    </section>;
}



export default ContentLayout;
