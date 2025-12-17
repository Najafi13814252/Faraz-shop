import { ProductSpecs } from "@/types/productSpecs"

type Props = {
  specs: ProductSpecs
}

export function SpecsTable({ specs }: Props) {
  return (
    <div className="overflow-x-auto border border-gray-300 rounded-lg bg-white">
      <h3 className="text-xl font-medium p-2 mr-4 my-6 border-r-8 border-r-sky-500 rounded pr-2">{specs.title}</h3>

      <table className="w-full text-sm text-gray-700">
        <tbody>
          {specs.rows.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <th className="text-right px-4 py-3 font-medium whitespace-nowrap">
                {row.label}
              </th>
              <td className="px-4 py-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
