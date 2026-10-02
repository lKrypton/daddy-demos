var e=`Config.Locale = Locales[Config.Language] or Locales.en or {}

if not Locales[Config.Language] then
    print(('^3[daddy-admin]^7 Unknown language "%s", falling back to en.'):format(tostring(Config.Language)))
end
`;export{e as default};