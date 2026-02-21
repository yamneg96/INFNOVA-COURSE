interface Props {
  enrolled: boolean;
  price: number;
  onEnroll: () => void;
}

export default function EnrollCard({ enrolled, price, onEnroll }: Props) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
      <div className="text-lg font-semibold">{price ? `$${price}` : 'Free'}</div>
      <button
        className="bg-[#FF6900] hover:bg-[#F54900] text-white w-full px-4 py-2 rounded-md font-semibold transition"
        disabled={enrolled}
        onClick={onEnroll}
      >
        {enrolled ? 'Enrolled' : 'Enroll Now'}
      </button>
    </div>
  );
}