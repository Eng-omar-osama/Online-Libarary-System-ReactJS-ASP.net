import Container from "@/features/auth-pages/Container";
import Heading from "@/features/auth-pages/Heading";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import { useForm } from "react-hook-form";

export default function Login() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log("data", data);
	};

	return (
		<Container isLogin>
			<Heading
				titlePrefix="Welcome to"
				title="The Best Online Book Store"
				subtitle="Login to the books library system"
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
					inputClass="h-20 text-xl"
					labelClass="text-xl"
					{...register("email", { required: true })}
				/>
				<InputField
					id="password"
					placeholder="••••••••••••••"
					label="Password"
					type="password"
					inputClass="h-20 text-xl"
					labelClass="text-xl"
					{...register("password", { required: true })}
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
