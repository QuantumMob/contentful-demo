import * as contentful from 'contentful'

const contentfulClient = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  space: process.env.CONTENTFUL_SPACE_ID || ''
})

const convertObject = (obj, language) => {
  if (!obj.fields) {
    return obj
  }
  const objType = obj.sys.type === 'Asset' ? 'Asset' : obj.sys.contentType.sys.id
  const result = {
    _type: objType
  }
  for (const key of Object.keys(obj.fields)) {
    const objField = obj.fields[key]
    if (Array.isArray(objField)) {
      result[key] = objField.map((field) => convertObject(field))
    } else {
      result[key] = convertObject(objField)
    }
  }
  return result
}

const getEntry = (id) => {
  return contentfulClient.getEntry(id).then((entry) => {
    return convertObject(entry)
  })
}

export default {
  getEntry
}