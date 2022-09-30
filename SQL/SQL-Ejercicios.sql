-- Ejercicio 1
1. Name of window with AD_Window_ID = ‘100’

-- Solución:
-- select Name from AD_Window where AD_Window_ID = '100'


-- Ejercicio 2
2. Update window with AD_Window_ID = ‘100’ appending ‘--’ to the name of
window with AD_Window_ID = ‘100’

-- Solución:
-- update AD_Window set Name = Name + '--' where AD_Window_ID = '100'


-- Ejercicio 3
3. List of all tabs in window with AD_Window_ID = ‘100’

-- Solución:
-- select * from AD_Tab where AD_Window_ID = '100'


-- Ejercicio 4
4. List of tab name + field name of all tabs in AD_Window_ID = ‘100’ sorted by tab
name and field name

-- Solución:
-- select t.Name, f.Name from AD_Tab t
-- inner join AD_Field f
-- on f.Name = t.Name
-- where AD_Window_ID = '100'
-- order by t.Name, f.Name


-- Ejercicio 5
5. Name and number of tabs of all windows

-- Solución:
-- select w.Name, count(*) as cant from AD_Tab t
-- inner join AD_Window w 
-- on w.Name = t.Name
-- group by w.Name


-- Ejercicio 6
6. List of all windows with its number of fields, sorting by number of fields starting
by the windows with a higher number of them

-- Solución:
-- select w.Name, count(*) as cant from AD_Field f
-- inner join AD_Tab t
-- on t.Name = f.Name
-- inner join AD_Window w 
-- on w.Name = t.Name
-- group by w.Name
-- order by cant desc


-- Ejercicio 7
7. Windows with more than 5 tabs

-- Solución:
-- select name, count(*) as cant from AD_Tab
-- group by name
-- having count(*) >= 5
-- order by cant desc