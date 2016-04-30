{
    "vendor": "TEKO",
    "product": "SM-I0",
    "version": "1.0.1",
    "buses": [{
        "name": "modbus_internal",
        "type": "modbus",
        "system_dev": "/dev/ttyS2",
        "baudrate": 9600,
        "stopbits": 1
    }, {
        "name": "modbus_external",
        "type": "modbus",
        "system_dev": "/dev/ttyS1",
        "baudrate": 9600,
        "stopbits": 1
    }],
    "input": {
        "values": [
            {
                "description": "Слово состояния",
                "name": "mb_state",
                "sql_type": "INTEGER",
                "addr": 127,
                "reg": 0,
                "oid": ".1.3.6.1.4.1.47480.1.1",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 0,
                    "max": 65535
                }
            },
            {
                "description": "Температура 1",
                "name": "mb_t1",
                "sql_type": "FLOAT",
                "addr": 127, 
                "reg": 1,
                "convert":"function(x){return (((x[0]<<16)>>0)>>16)/10;}",
                "oid": ".1.3.6.1.4.1.47480.1.2",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 10,
                    "max": 100
                }
            },
            {
                "description": "Температура 2",
                "name": "mb_t2",
                "sql_type": "FLOAT",    
                "addr": 127,
                "reg": 2,
                "convert":"function(x){return (((x[0]<<16)>>0)>>16)/10;}",
                "oid": ".1.3.6.1.4.1.47480.1.3",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 100,
                    "max": 2000
                }
            },
            {
                "description": "Температура 3",
                "name": "mb_t3",
                "sql_type": "FLOAT",    
                "addr": 127,
                "reg": 3,
                "convert":"function(x){return (((x[0]<<16)>>0)>>16)/10;}",
                "oid": ".1.3.6.1.4.1.47480.1.4",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 100,
                    "max": 2000
                }
            },
            {
                "description": "Температура 4",
                "name": "mb_t4",
                "sql_type": "FLOAT",    
                "addr": 127,
                "reg": 4,
                "convert":"function(x){return (((x[0]<<16)>>0)>>16)/10;}",
                "oid": ".1.3.6.1.4.1.47480.1.5",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 100,
                    "max": 2000
                }
            },
            {
                "description": "Дискретные входы",
                "name": "mb_digital_inputs_value",
                "sql_type": "INTEGER",
                "addr": 127,
                "reg": 5,
                "oid": ".1.3.6.1.4.1.47480.1.6",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 0,
                    "max": 65535
                }
            },
            {
                "description": "Входы сухих контактов",
                "name": "mb_dry_contact_value",
                "sql_type": "INTEGER",
                "addr": 127,
                "reg": 6,
                "oid": ".1.3.6.1.4.1.47480.1.7",
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 0,
                    "max": 65535
                }
            }
        ],
        "script": "function(){}"
    },
    "output": {
        "values": [
            {
                "description": "Выхода сигнальных сухих контактов SDCO",
                "name": "mb_dry_contact_output_value",
                "addr": 127,
                "reg": 22,
                "oid": ".1.3.6.1.4.1.47480.2.1",
                "default": 0,
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 0,
                    "max": 65535
                }
            },
            {
                "description": "Выхода силовых сухих контактов PDCO",
                "name": "mb_power_contact_output_value",
                "addr": 127,
                "reg": 23,
                "oid": ".1.3.6.1.4.1.47480.2.2",
                "default": 0,
                "type": "modbus",
                "bus": "modbus_internal",
                "intervals": {
                    "min": 0,
                    "max": 65535
                }
            }
        ]
    }
}
