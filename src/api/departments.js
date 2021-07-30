import request from '@/utils/request'
export function getDepartmentsApi () {
  return request({
    url: '/company/department'
  })
}
