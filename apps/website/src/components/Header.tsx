'use client';

import { FiCommand } from '@react-icons/all-files/fi/FiCommand';
import { VscGithubInverted } from '@react-icons/all-files/vsc/VscGithubInverted';
import { VscMenu } from '@react-icons/all-files/vsc/VscMenu';
import { VscSearch } from '@react-icons/all-files/vsc/VscSearch';
import { Button } from 'ariakit/button';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useMemo } from 'react';
import { useCmdK } from '~/contexts/cmdK';
import { useNav } from '~/contexts/nav';

const ThemeSwitcher = dynamic(async () => import('./ThemeSwitcher'));

export default function Header() {
	const pathname = usePathname();
	const { setOpened } = useNav();
	const dialog = useCmdK();

	const pathElements = useMemo(
		() =>
			pathname
				.split('/')
				.slice(1)
				.map((path, idx, original) => (
					<Link
						className="focus:ring-width-2 focus:ring-blurple rounded outline-0 hover:underline focus:ring"
						href={`/${original.slice(0, idx + 1).join('/')}`}
						key={`${path}-${idx}`}
					>
						{path}
					</Link>
				)),
		[pathname],
	);

	const breadcrumbs = useMemo(
		() =>
			pathElements.flatMap((el, idx, array) => {
				if (idx === 0) {
					return (
						<Fragment key={`${el.key}-${idx}`}>
							<div className="mx-2">/</div>
							{el}
							<div className="mx-2">/</div>
						</Fragment>
					);
				}

				if (idx !== array.length - 1) {
					return (
						<Fragment key={`${el.key}-${idx}`}>
							{el}
							<div className="mx-2">/</div>
						</Fragment>
					);
				}

				return <Fragment key={`${el.key}-${idx}`}>{el}</Fragment>;
			}),
		[pathElements],
	);

	return (
		<header className="dark:bg-dark/50 dark:border-dark-100 border-light-900 sticky top-4 z-20 rounded-md border bg-white/50 shadow backdrop-blur-md">
			<div className="block h-16 px-6">
				<div className="flex h-full flex-row place-content-between place-items-center gap-8">
					<Button
						aria-label="Menu"
						className="focus:ring-width-2 focus:ring-blurple flex h-6 w-6 transform-gpu cursor-pointer select-none appearance-none flex-row place-items-center rounded border-0 bg-transparent p-0 text-sm font-semibold leading-none no-underline outline-0 focus:ring active:translate-y-px lg:hidden"
						onClick={() => setOpened((open) => !open)}
					>
						<VscMenu size={24} />
					</Button>
					<div className="hidden lg:flex lg:flex-row lg:overflow-hidden">{breadcrumbs}</div>
					<Button
						as="div"
						className="dark:bg-dark-800 focus:ring-width-2 focus:ring-blurple w-56 grow rounded bg-white px-4 py-2.5 outline-0 focus:ring sm:grow-0"
						onClick={() => dialog?.toggle()}
					>
						<div className="flex flex-row place-items-center gap-4 md:justify-between">
							<VscSearch size={18} />
							<span className="opacity-65">Search...</span>
							<div className="md:opacity-65 hidden md:flex md:flex-row md:place-items-center md:gap-2">
								<FiCommand size={18} /> K
							</div>
						</div>
					</Button>
					<div className="flex flex-row place-items-center gap-4">
						<Button
							aria-label="GitHub"
							as="a"
							className="focus:ring-width-2 focus:ring-blurple flex h-6 w-6 transform-gpu cursor-pointer select-none appearance-none flex-row place-items-center rounded rounded-full border-0 bg-transparent p-0 text-sm font-semibold leading-none no-underline outline-0 focus:ring active:translate-y-px"
							href="https://github.com/discordjs/discord.js"
							rel="noopener noreferrer"
							target="_blank"
						>
							<VscGithubInverted size={24} />
						</Button>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
