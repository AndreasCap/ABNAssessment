import { BaseData, TransformedData } from '@/types/basedata'

export default function TransformData(data: BaseData) {
  const transformedData: TransformedData = {}

  data.data.forEach((item) => {
    transformedData[item.name] = item
  })

  return transformedData
}
