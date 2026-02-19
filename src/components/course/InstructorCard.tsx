interface Props {
  instructor: { name: string; bio: string; avatar: string };
}

export default function InstructorCard({ instructor }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow">
      <img src={instructor.avatar} alt={instructor.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-gray-900">{instructor.name}</div>
        <div className="text-sm text-gray-500">{instructor.bio}</div>
      </div>
    </div>
  );
}