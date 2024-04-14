import { forwardRef } from "react";
import { LabelInputContainer } from "./LabelInputContainer";
import { Label } from "./Label";
import { Input } from "./Input";

const InputField = forwardRef(
	(
		{
			id,
			label,
			placeholder,
			type,
			className,
			labelClass = "",
			inputClass = "",
			labelProps,
			...inputProps
		},
		ref
	) => {
		return (
			<LabelInputContainer className={className}>
				<Label htmlFor={id} className={labelClass} {...labelProps}>
					{label}
				</Label>
				<Input
					id={id}
					className={inputClass}
					placeholder={placeholder}
					type={type}
					ref={ref}
					{...inputProps}
				/>
			</LabelInputContainer>
		);
	}
);

InputField.displayName = "InputField";

export default InputField;
