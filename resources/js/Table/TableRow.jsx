import { useEffect, useState } from "react"
import Action from "./Action"


const TableRow = ({ rowdata, properties, actions, handleCheckedRow,
  selectAll, setSelectAll, toggleSelectAll,
  setPartialSelect, partialSelect, dataProcessor }) => {
  const [isChecked, check] = useState(false);

  const handleSelection = () => {
    if (selectAll) {
      setSelectAll(false)
      check(false)
      handleCheckedRow(rowdata.id, false)
      setPartialSelect(true)
    }
    else {
      if (isChecked == false) {
        handleCheckedRow(rowdata.id, true)
      }
      else {
        handleCheckedRow(rowdata.id, false)
      }
      check(!isChecked)
    }
  }
  useEffect(() => {
    if (selectAll) {
      check(true)
    }
    if (!selectAll && !partialSelect) {
      check(false)
    }
  }, [selectAll])

  useEffect(() => {
    if (!toggleSelectAll) {
      check(false)
    }

  }, [toggleSelectAll])
  return (
    <>
      <tr>
        {
          toggleSelectAll ?
            < td className="text-center border border-blue-200 border-solid min-w-full">
              <div>
                <input type={"checkbox"} checked={isChecked || selectAll} onChange={handleSelection} />
              </div>
            </td>
            : ""}
        {properties.map((property, index) => (
          <td key={index} className="p-2 border border-blue-200 border-solid min-w-full">
            {
              (property.dataProcessor) ?
                property.dataProcessor(rowdata[property.name])
                :
                rowdata[property.name]
            }
          </td>
        ))}
        {actions ? (
          <td className="p-2 border border-blue-200 border-solid">
            <Action actions={actions} rowdata={rowdata} />
          </td>
        )
          : ''}
      </tr>
    </>
  )
}

export default TableRow
