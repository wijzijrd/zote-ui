import { inter } from '@/app/ui/fonts';
import { Character, Arc, Act } from '@/app/lib/definitions';

export default function NoteSummary({ subject }: {
    subject: Character | Arc | Act;
  }) {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-gray-300`}
    >
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
