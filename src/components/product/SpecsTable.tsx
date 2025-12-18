import { ProductSpecs } from "@/types/productSpecs"

type Props = {
  specs: ProductSpecs
}

export function SpecsTable({ specs }: Props) {
  return (
    <div className="detail-box overflow-x-auto">
      <h3 className="detail-title p-2 mr-4 my-4">{specs.title}</h3>

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
