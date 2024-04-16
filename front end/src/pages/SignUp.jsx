import { useForm } from "react-hook-form";
import Container from "@/features/auth-pages/Container";
import Heading from "@/features/auth-pages/Heading";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(errors);

	const onSubmit = (data) => {
		console.log("data", data);
	};

	return (
		<Container isLogin>
			<Heading
				titlePrefix="Welcome to"
				title="The Best Online Book Store"
				subtitle="Create account and join us in the books library system"
			/>

			<form
				className="flex flex-col items-center gap-8 my-8 w-full"
				onSubmit={handleSubmit(onSubmit)}
			>
				<InputField
					id="email"
					placeholder="projectmayhem@fc.com"
					type="email"
					label="Email"
					inputClass={`h-20 text-xl ${errors.email ? "border-brand-500" : ""}`}
					labelClass="text-xl"
					{...register("email", { required: true })}
				/>

				<InputField
					id="password"
					placeholder="••••••••••••••"
					label="Password"
					type="password"
					inputClass={`h-20 text-xl ${
						errors.password ? "border-brand-500" : ""
					}`}
					labelClass="text-xl"
					{...register("password", { required: true })}
				/>

				<InputField
					id="confirmPassword"
					placeholder="••••••••••••••"
					label="confirm password"
					type="password"
					inputClass={`h-20 text-xl ${
						errors.confirmPassword ? "border-brand-500" : ""
					}`}
					labelClass="text-xl"
					{...register("confirmPassword", {
						required: true,
						deps: "password",
						validate: (value, fieldsValues) => value === fieldsValues.password,
					})}
				/>

				<Button
					type="submit"
					variation="secondary"
					className="w-3/5 mt-5 hover:!text-white"
				>
					Log in
				</Button>
			</form>
		</Container>
	);
}
