import React from "react"

export default function OrganizationOwner() {
  const user = useSelector((state) => state.user)
  return user.isOrganization ? children : <Navigate to="/login" />
}
