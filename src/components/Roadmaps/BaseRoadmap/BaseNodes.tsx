import { Handle, Position } from "reactflow";
import styles from "./BaseNode.module.css";

const MuslimNode = ({ data }: any) => {
	return (
		<div className={styles.muslimNode}>
			<Handle type="target" position={Position.Top} style={{ background: "#555" }} />
			<Handle type="source" position={Position.Bottom} style={{ background: "#555" }} />
			<Handle id="a" type="source" position={Position.Right} style={{ background: "#555" }} />
			<Handle id="b" type="source" position={Position.Left} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

const CustomNode = ({ data }: any) => {
	return (
		<div className={styles.customNode}>
			<Handle type="target" position={Position.Right} style={{ background: "#555" }} />
			<Handle id="a" type="target" position={Position.Left} style={{ background: "#555" }} />
			<Handle type="source" position={Position.Left} style={{ background: "#555" }} />
			<Handle id="a" type="source" position={Position.Right} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

const TopNode = ({ data }: any) => {
	return (
		<div className={styles.muslimNode}>
			<Handle type="source" position={Position.Bottom} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

const BottomNode = ({ data }: any) => {
	return (
		<div className={styles.muslimNode}>
			<Handle type="target" position={Position.Top} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

const MiddleNode = ({ data }: any) => {
	return (
		<div className={styles.muslimNode}>
			<Handle type="target" position={Position.Top} style={{ background: "#555" }} />
			<Handle type="source" position={Position.Bottom} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

const RightNode = ({ data }: any) => {
	return (
		<div className={styles.dataNode}>
			<Handle type="target" position={Position.Right} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

const LeftNode = ({ data }: any) => {
	return (
		<div className={styles.dataNode}>
			<Handle type="target" position={Position.Left} style={{ background: "#555" }} />
			<div style={{ color: "black", fontSize: "12px" }}>{data.label}</div>
		</div>
	);
};

export { MuslimNode, CustomNode, TopNode, BottomNode, MiddleNode, RightNode, LeftNode };
