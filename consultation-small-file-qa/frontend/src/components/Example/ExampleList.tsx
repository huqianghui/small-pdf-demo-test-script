import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "茅台经营目标 或者 茅台2023年的经营目标",
        value: "茅台经营目标"
    },
    { text: "2023年3月3日，贵州茅台融资余额", value: "2023年3月3日，贵州茅台融资余额" },
    { text: "济川药业近期大机构评价如何", value: "济川药业近期大机构评价如何" },
    { text: "美国联邦住房贷款银行发债规模", value: "美国联邦住房贷款银行发债规模" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
