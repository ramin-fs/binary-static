import {
    PropTypes as MobxPropTypes,
    observer }                  from 'mobx-react';
import PropTypes                from 'prop-types';
import React, { Fragment }      from 'react';
import { localize }             from '_common/localize';
import Fieldset                 from 'App/Components/Form/fieldset.jsx';
import RangeSlider              from 'App/Components/Form/RangeSlider';
import { convertDurationLimit } from 'Stores/Modules/Trading/Helpers/duration';
import { toMoment }             from 'Utils/Date';
import DurationToggle           from './duration_toggle.jsx';
import AdvancedDuration         from './advanced_duration.jsx';
import SimpleDuration           from './simple_duration.jsx';

const expiry_list = [
    { text: localize('Duration'), value: 'duration' },
];

const Duration = ({
    adv_duration_unit,
    adv_expiry_type,
    advanced_expiry_type,
    contract_expiry_type,
    duration,
    duration_unit,
    duration_units_list,
    duration_min_max,
    expiry_date,
    expiry_time,
    expiry_type,
    onChangeDuration,
    onChangeDurationU,
    du_is_advanced,
    is_minimized,
    is_nativepicker,
    server_time,
    sessions,
    start_date,
    start_time,
    validation_errors,
    market_close_times,
    sim_duration_unit,
    duration_t,
    duration_s,
    duration_m,
    duration_h,
    duration_d,
}) => {
    const has_end_time = expiry_list.find(expiry => expiry.value === 'endtime');
    if (duration_units_list.length === 1 && duration_unit === 't') {
        if (has_end_time) {
            expiry_list.pop(); // remove end time for contracts with only tick duration
        }
    } else if (!has_end_time) {
        expiry_list.push({ text: localize('End Time'), value: 'endtime' });
    }

    // TODO: Move to MobileComponent
    if (is_minimized) {
        const moment_expiry = toMoment(expiry_date);
        const duration_unit_text = (duration_units_list.find(o => o.value === duration_unit) || {}).text;
        return (
            <div className='fieldset-minimized duration'>
                <span className='icon trade-duration' />
                {expiry_type === 'duration'
                    ? `${duration} ${duration_unit_text}`
                    : `${moment_expiry.format('ddd - DD MMM, YYYY')}\n${expiry_time}`
                }
            </div>
        );
    }

    let max_value, min_value;
    if (duration_min_max[contract_expiry_type]) {
        max_value = convertDurationLimit(+duration_min_max[contract_expiry_type].max, duration_unit);
        min_value = convertDurationLimit(+duration_min_max[contract_expiry_type].min, duration_unit);
    }

    const props = {
        shared_input: {
            max_value,
            min_value,
            onChange: onChangeDuration,
        },
        number_input: {
            type            : 'number',
            is_nativepicker,
            is_incrementable: true,
            error_messages  : validation_errors.duration || [],
        },
    };
    // e.g. digit contracts only has range slider - does not have toggle between advanced / simple
    const has_toggle = expiry_list.length > 1 || duration_units_list.length > 1;

    const getDurationValue = du => {
        const duration_obj = {
            t: duration_t,
            s: duration_s,
            m: duration_m,
            h: duration_h,
            d: duration_d,
        };
        return duration_obj[du];
    };

    const onToggleDurationType = ({ target }) => {
        const { name, value } = target;

        onChangeDurationU({ name, value });
        // set duration_unit, value as advance/simple types unit
        let duration_type = value ? adv_duration_unit : sim_duration_unit;

        const contract_has_duration_unit = duration_units_list.some(du => du === duration_type);
        if (!contract_has_duration_unit) {
            duration_type = duration_units_list[0].value;
            onChangeDurationU({ name: `${value ? 'adv' : 'sim'}_duration_unit`, value: duration_type });
        }
        onChangeDuration({ target: { name: 'duration_unit', value: duration_type } });

        const duration_value  = getDurationValue(duration_type);
        onChangeDuration({ target: { name: 'duration', value: duration_value } });
    };

    return (
        <Fieldset>
            { !has_toggle &&
                <RangeSlider
                    name='duration'
                    ticks={10}
                    value={duration_t}
                    {...props.shared_input}
                />
            }
            { has_toggle &&
                <Fragment>
                    { du_is_advanced &&
                        <AdvancedDuration
                            adv_expiry_type={adv_expiry_type}
                            adv_duration_unit={adv_duration_unit}
                            advanced_expiry_type={advanced_expiry_type}
                            contract_expiry_type={contract_expiry_type}
                            duration_min_max={duration_min_max}
                            duration_units_list={duration_units_list}
                            expiry_date={expiry_date}
                            expiry_list={expiry_list}
                            expiry_time={expiry_time}
                            is_nativepicker={is_nativepicker}
                            market_close_times={market_close_times}
                            number_input_props={props.number_input}
                            onChange={onChangeDuration}
                            server_time={server_time}
                            sessions={sessions}
                            shared_input_props={props.shared_input}
                            start_date={start_date}
                            start_time={start_time}
                            onChangeDurationU={onChangeDurationU}
                            duration_t={duration_t}
                            duration_s={duration_s}
                            duration_m={duration_m}
                            duration_h={duration_h}
                            duration_d={duration_d}
                        /> }
                    { !du_is_advanced &&
                        <SimpleDuration
                            duration_units_list={duration_units_list}
                            number_input_props={props.number_input}
                            onChange={onChangeDuration}
                            shared_input_props={props.shared_input}
                            sim_duration_unit={sim_duration_unit}
                            onChangeDurationU={onChangeDurationU}
                            duration_t={duration_t}
                            duration_m={duration_m}
                            duration_d={duration_d}
                        /> }
                    <DurationToggle
                        name={'du_is_advanced'}
                        onChange={onToggleDurationType}
                        value={du_is_advanced}
                    />
                </Fragment>
            }
        </Fieldset>
    );
};

// ToDo: Refactor Duration.jsx and date_picker.jsx
Duration.propTypes = {
    adv_expiry_type: PropTypes.string,
    adv_duration_unit: PropTypes.string,
    advanced_expiry_type: PropTypes.string,
    contract_expiry_type: PropTypes.string,
    du_is_advanced      : PropTypes.bool,
    duration            : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    duration_min_max   : PropTypes.object,
    duration_unit      : PropTypes.string,
    duration_units_list: MobxPropTypes.arrayOrObservableArray,
    expiry_date        : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    expiry_time         : PropTypes.string,
    expiry_type         : PropTypes.string,
    is_minimized        : PropTypes.bool,
    is_nativepicker     : PropTypes.bool,
    market_close_times  : PropTypes.array,
    onChange            : PropTypes.func,
    onChangeDuration    : PropTypes.func,
    onChangeDurationU   : PropTypes.func,
    server_time         : PropTypes.object,
    sessions            : MobxPropTypes.arrayOrObservableArray,
    sim_duration_unit   : PropTypes.string,
    start_date          : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    start_time       : PropTypes.string,
    validation_errors: PropTypes.object,
    duration_t: PropTypes.number,
    duration_s: PropTypes.number,
    duration_m: PropTypes.number,
    duration_h: PropTypes.number,
    duration_d: PropTypes.number,
};

export default observer(Duration);
