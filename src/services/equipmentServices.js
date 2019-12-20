import API from "utils/Axios";

export async function getAllEquipment() {
  return await API.get("/devices");
}

export async function deleteEquipment({ equipmentID }) {
  const url = "/devices/delete/" + equipmentID;
  return await API.get(url);
}

export async function getAllEquipmentType() {
  return await API.get("/devicetypes");
}

export async function filterDeviceService({ devicetypeid, devicestatusid }) {
  const url =
    "devices?devicestatusid=" +
    devicestatusid +
    "&devicetypeid=" +
    devicetypeid;
  console.log(devicestatusid);
  console.log(devicetypeid);
  return await API.get(url);
}
