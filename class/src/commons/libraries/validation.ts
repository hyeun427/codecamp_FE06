export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  // 조건을 둘다 제외시켜야해!!!!!잊지말자
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    console.log(file.type);
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
