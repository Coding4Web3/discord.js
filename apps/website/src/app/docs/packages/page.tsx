import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { VscArrowLeft } from '@react-icons/all-files/vsc/VscArrowLeft';
import { VscArrowRight } from '@react-icons/all-files/vsc/VscArrowRight';
import { VscPackage } from '@react-icons/all-files/vsc/VscPackage';
import Link from 'next/link';
import type { ServerRuntime } from 'next/types';
import { PACKAGES } from '~/util/constants';

export const runtime: ServerRuntime = 'edge';

export default function Page() {
	return (
		<div className="min-w-xs sm:w-md mx-auto flex min-h-screen flex-col gap-8 px-4 py-6 lg:px-6 lg:py-6">
			<h1 className="text-2xl font-semibold">Select a package:</h1>
			<div className="flex flex-col gap-4">
				<a
					className="dark:bg-dark-400 dark:border-dark-100 dark:hover:bg-dark-300 dark:active:bg-dark-200 focus:ring-width-2 focus:ring-blurple flex h-11 transform-gpu cursor-pointer select-none appearance-none place-content-between rounded border border-neutral-300 bg-white p-4 text-base font-semibold leading-none text-black outline-0 hover:bg-neutral-100 focus:ring active:translate-y-px active:bg-neutral-200 dark:text-white"
					href="https://old.discordjs.dev/#/docs/discord.js"
				>
					<div className="flex grow flex-row place-content-between place-items-center gap-4">
						<div className="flex grow flex-row place-content-between place-items-center gap-4">
							<div className="flex flex-row place-content-between place-items-center gap-4">
								<VscPackage size={25} />
								<h2 className="font-semibold">discord.js</h2>
							</div>
						</div>
						<VscArrowRight size={20} />
					</div>
				</a>
				{PACKAGES.map((pkg, idx) => (
					<Link
						className="dark:bg-dark-400 dark:border-dark-100 dark:hover:bg-dark-300 dark:active:bg-dark-200 focus:ring-width-2 focus:ring-blurple flex h-11 transform-gpu cursor-pointer select-none appearance-none flex-row place-content-between rounded border border-neutral-300 bg-white p-4 text-base font-semibold leading-none text-black outline-0 hover:bg-neutral-100 focus:ring active:translate-y-px active:bg-neutral-200 dark:text-white"
						href={`/docs/packages/${pkg}`}
						key={`${pkg}-${idx}`}
					>
						<div className="flex grow flex-row place-content-between place-items-center gap-4">
							<div className="flex grow flex-row place-content-between place-items-center gap-4">
								<div className="flex flex-row place-content-between place-items-center gap-4">
									<VscPackage size={25} />
									<h2 className="font-semibold">{pkg}</h2>
								</div>
								{/* <Link href={`/docs/packages/${pkg}`}>
									<div
										className="bg-blurple focus:ring-width-2 flex h-6 transform-gpu cursor-pointer select-none appearance-none flex-row place-content-center place-items-center rounded border-0 px-2 text-xs font-semibold leading-none text-white outline-0 focus:ring focus:ring-white active:translate-y-px"
										role="link"
									>
										Select version
									</div>
								</Link> */}
							</div>
							<VscArrowRight size={20} />
						</div>
					</Link>
				))}
				<a
					className="dark:bg-dark-400 dark:border-dark-100 dark:hover:bg-dark-300 dark:active:bg-dark-200 focus:ring-width-2 focus:ring-blurple flex h-11 transform-gpu cursor-pointer select-none appearance-none place-content-between rounded border border-neutral-300 bg-white p-4 text-base font-semibold leading-none text-black outline-0 hover:bg-neutral-100 focus:ring active:translate-y-px active:bg-neutral-200 dark:text-white"
					href="https://discord-api-types.dev/"
				>
					<div className="flex grow flex-row place-content-between place-items-center gap-4">
						<div className="flex grow flex-row place-content-between place-items-center gap-4">
							<div className="flex flex-row place-content-between place-items-center gap-4">
								<VscPackage size={25} />
								<h2 className="font-semibold">discord-api-types</h2>
							</div>
						</div>
						<FiExternalLink size={20} />
					</div>
				</a>
			</div>
			<Link
				className="bg-blurple focus:ring-width-2 flex h-11 transform-gpu cursor-pointer select-none appearance-none flex-row place-items-center gap-2 place-self-center rounded border-0 px-4 text-base font-semibold leading-none text-white no-underline outline-0 focus:ring focus:ring-white active:translate-y-px"
				href="/"
			>
				<VscArrowLeft size={20} /> Go back
			</Link>
		</div>
	);
}
