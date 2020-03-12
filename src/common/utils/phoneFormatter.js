const normilizer = (match, p1, p2, p3, p4) => {
  if (p4) return `+7 (${p1}) ${p2}-${p3}-${p4}`;
  if (p3) return `+7 (${p1}) ${p2}-${p3}`;
  if (p2) return `+7 (${p1}) ${p2}`;
  if (p1) return `+7 (${p1}`;
};

export const formatPhone = value =>
  value.replace(/(\d{1,3})(\d{0,3})(\d{0,2})(\d{0,2})/g, normilizer);

export const unFormatPhone = value => {
  // вырезаем "+7" для правильного метча
  if (value.length > 2) value = value.slice(2);
  value = value.match(/\d+/g) || [];
  return value.join("");
};
